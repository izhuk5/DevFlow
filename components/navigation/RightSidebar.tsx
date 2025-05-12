import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import TagCard from '../cards/TagCard';

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "Best practices for TypeScript in Next.js" },
  { _id: "3", title: "Understanding Server Components in Next.js 14" },
  { _id: "4", title: "How to implement authentication with Clerk?" },
  { _id: "5", title: "Optimizing performance with React Query" },
]

const popularTags = [
  { _id: '1', name: 'react', questions: 100 },
  { _id: '2', name: 'javascript', questions: 80 },
  { _id: '3', name: 'next.js', questions: 60 },
  { _id: '4', name: 'typescript', questions: 40 },
  { _id: '5', name: 'node.js', questions: 20 },
]

const RightSidebar = () => {
  return (
    <section className='pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map(({ _id, title }) => (
            <Link
              className='flex cursor-pointer items-center justify-between gap-7'
              href={ROUTES.PROFILE(_id)}
              key={_id}
            >
              <p className='body-medium text-dark500_light700'>{title}
              </p>

              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular tags</h3>

        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

