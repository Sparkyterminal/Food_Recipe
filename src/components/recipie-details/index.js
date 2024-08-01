import Link from "next/link";

const RecipiedetailsItem = ({ recipiesDetails }) => {
  return (
    <div>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <Link href={"/"}>Go to home</Link>
        <Link href={"/recipes-list"} className="ml-4">
          Go back
        </Link>
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full  lg:sticky top-0 sm:flex gap-2">
            <img
              src={recipiesDetails?.image}
              alt={recipiesDetails?.name}
              className="w-1/2 rounded-md"
            />
          </div>
          <div className="flex flex-wrap">
            <h2 className="text-3xl font-extrabold text-gray-950">
              {recipiesDetails?.name}
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            <p className="text-lg text-gray-700">
              {recipiesDetails?.mealType[0]}
            </p>
          </div>
          <div className="flex flex-wrap mt-5">
            <p className="text-lg text-gray-700">{recipiesDetails?.cuisine}</p>
          </div>
          <div className="flex flex-wrap mt-5">
            <h3 className="text-lg font-bold text-gray-700">Ingeredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {recipiesDetails?.ingredients.map((ingredient) => (
                <li key={ingredient} className="text-lg text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap mt-5">
            <p className="text-lg text-gray-700">
              {recipiesDetails?.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipiedetailsItem;
