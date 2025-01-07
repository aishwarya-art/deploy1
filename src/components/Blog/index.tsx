import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="My Blogs"
          paragraph="I share experiences of self-discovery and growth through exploration, diving deep into challenges and triumphs in tech and life. It's a space where I document the lessons learned, the creativity sparked, and the skills honed, as I navigate through new projects, ideas, and technologies."
          center
          width="full"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-300 rounded-lg p-4 hover:border-gray-400 flex flex-col h-full transition-all"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl flex-grow">{blog.title}</h3>
                <p className="text-gray-500 flex-grow">{blog.paragraph}</p>
                <span className="text-sm text-gray-400 mt-2 block">{blog.publishDate}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
