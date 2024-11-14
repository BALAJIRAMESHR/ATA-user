import React from 'react';
import { CalendarDays } from 'lucide-react';

const BlogPost = () => {
  const similarPosts = [
    {
      title: "A' Design Award & Expert Competitions",
      excerpt: "Embark on a journey to the untouched beauty of a secluded beach nestled away from the hustle and bustle of city life",
      date: "May24, 2023",
      image: "/assets/blogs.svg" 
    },
    {
      title: "A' Design Award & Expert Competitions",
      excerpt: "Embark on a journey to the untouched beauty of a secluded beach nestled away from the hustle and bustle of city life",
      date: "May24, 2023",
      image: "/assets/blogs.svg" 
    },
    {
      title: "A' Design Award & Expert Competitions",
      excerpt: "Embark on a journey to the untouched beauty of a secluded beach nestled away from the hustle and bustle of city life",
      date: "May24, 2023",
      image: "/assets/blogs.svg" 
    },
    {
      title: "A' Design Award & Expert Competitions",
      excerpt: "Embark on a journey to the untouched beauty of a secluded beach nestled away from the hustle and bustle of city life",
      date: "May24, 2023",
      image: "/assets/blogs.svg" 
    }
  ];

  return (
    <div className="container p-12 py-32">
      {/* Main Blog Post */}
      <div className=" mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            A' Design Award & Competitions: Final Call For Submissions.
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              Embark on a journey to the untouched beauty of a secluded beach nestled away from the hustle and bustle of city life. As the sun kisses the horizon, casting hues of orange and pink across the sky, you'll find yourself captivated by the tranquility that envelops this coastal paradise. Stroll along the powdery sands, feeling the gentle caress of the ocean breeze against your skin. Listen to the soothing symphony of waves crashing against the shore, a melody that lulls you into a state of peaceful bliss. Seabirds dance gracefully overhead, adding to the enchanting ambiance of this secluded sanctuary. For the adventurous souls, there are ample opportunities for snThe A' Design Award & Competitions is making its final call for submissions. This prestigious competition invites designers, innovators, and companies from around the globe to participate and showcase their best works.
            </p>
          </div>
          
          <div className="my-12 ">
            <img 
              src="/assets/blogs.svg" 
              alt="Featured image"
              className="w-full max-w-2xl h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              Recognized as one of the most significant accolades in the design industry, the A' Design Award covers a wide range of categories, ensuring every creative field is represented. Winners receive extensive recognition, international exposure, and a certificate of excellence, boosting their reputation and credibility in the design community. Additionally, awardees gain valuable media coverage and the opportunity to connect with industry leaders. Don't miss this chance to have your work acknowledged on a global platform. Submit your entry now and join the ranks of the world's top designers.orkeling amidst vibrant coral reefs teeming with marine life. Dive into the crystal-clear waters and discover a world brimming with colorful fish and exotic creatures. Alternatively, simply unwind beneath the shade of swaying palm trees, sipping on refreshing coconut water as you bask in the warmth of the tropical.
            </p>
          </div>
        </div>

        {/* Similar Blogs Section */}
        <div className="-mb-24">
          <h2 className="text-2xl font-bold mb-8">Similar Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-3 ">
                  <h3 className="font-semibold text-lg line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-blue-500 text-sm hover:underline">
                    View more...
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;