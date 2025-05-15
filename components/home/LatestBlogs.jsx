import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const LatestBlogsData = [
  {
    featuredImage: "/assets/homepage/blog-1.jpg",
    altText: "Doctor showing spine model to a patient",
    title: "Understanding Spinal Injuries After Car Accidents",
    slug: "understanding-spinal-injuries",
    createdAt: "2025-04-10T09:00:00Z",
    shortDescription:
      "Learn how spinal injuries occur after accidents and what treatments are available to ensure a full recovery.",
  },
  {
    featuredImage: "/assets/homepage/blog-2.jpg",
    altText: "Therapist assisting a patient during recovery",
    title: "Top 5 Recovery Tips After a Major Accident",
    slug: "top-recovery-tips",
    createdAt: "2025-04-15T11:30:00Z",
    shortDescription:
      "Follow these expert tips to speed up your healing process and regain strength after a serious injury.",
  },
  {
    featuredImage: "/assets/homepage/blog-3.jpg",
    altText: "Advanced spinal treatment technology",
    title: "How Technology is Changing Spinal Care",
    slug: "technology-in-spinal-care",
    createdAt: "2025-04-20T15:45:00Z",
    shortDescription:
      "Discover how innovations in technology are revolutionizing the way spinal injuries are treated today.",
  },
];

const LatestBlogs = async () => {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="container p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center">
            Our Latest Blogs
          </h1>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="2xl:w-[60%] mx-auto mt-4">
            <p className="text-md md:text-lg text-[#55545A] text-center">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {LatestBlogsData.map((item, index) => (
            <div key={item.slug} className="rounded-lg overflow-hidden">
              <ScrollMotionEffect effect="fade-up" duration="1000">
                <div className="w-full h-60 relative overflow-hidden">
                  <Image
                    src={item.featuredImage}
                    alt={item.altText}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                </div>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="p-4">
                  <h2 className="text-lg font-bold text-black">{item.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={`#`}
                    className="inline-block mt-4 text-primary font-medium hover:underline duration-500"
                  >
                    Read More →
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center hover:scale-105  transition duration-300">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <Link
              href={"/"}
              className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary duration-500 hover:scale-105  transition "
            >
              View All Reviews
            </Link>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
