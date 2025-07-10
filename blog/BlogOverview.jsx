import { Link } from "react-router-dom";

export default function BlogOverview() {
  const posts = [
    {
      title: "Den Kærlige Plan",
      image: "/images/lysboern.jpg",
      path: "/blog/KaerligPlan",
    },
    {
      title: "Hvem vi er – Elouna & Eloriel",
      image: "/images/forening.jpg",
      path: "/blog/HvemViEr",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-serif mb-8">Bloginlæg</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {posts.map((post, index) => (
          <Link
            to={post.path}
            key={index}
            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
