import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/app/shared/convertToObject";

const SearchResultsPage = async ({ searchParams }) => {
  const params = await Promise.resolve(searchParams);
  const { location, propertyType } = params;

  await connectDB();

  const locationPattern = new RegExp(location, "i");

  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { "location.street": locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { "location.zipcode": locationPattern },
    ],
  };

  if (propertyType && propertyType !== "All") {
    query.type = new RegExp(propertyType, "i");
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);
  console.log(properties);

  return <div>search results</div>;
};

export default SearchResultsPage;
