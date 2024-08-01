import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const RecipieList = ({ recipieslist }) => {
  // console.log(recipieslist);
  return (
    <div className="p-4 mx-auto lg-max-w-4xl md:max-w-4xl sm:max-w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-12">Recipies List</h1>
      <Link href={"/"}>Go to home</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipieslist && recipieslist.length > 0
          ? recipieslist.map((recipie) => (
              <Link key={recipie.id} href={`/recipes-list/${recipie.id} `}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={recipie.image}
                        alt={recipie.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipie.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-500">
                          Rating : {recipie.rating}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-lg text-gray-500 font-bold">
                          {recipie.cuisine}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default RecipieList;
