// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const contentDirectory = path.join(process.cwd(), 'content');

// export function getSortedPostsData() {
//   if (!fs.existsSync(contentDirectory)) {
//     return [];
//   }

//   const fileNames = fs.readdirSync(contentDirectory);
  
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.mdx$/, '');
//     const fullPath = path.join(contentDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const { data } = matter(fileContents);

//     return {
//       id,
//       ...data,
//     };
//   });

//   return allPostsData;
// }

// export async function getPostData(id) {
//   const fullPath = path.join(contentDirectory, `${id}.mdx`);
  
//   if (!fs.existsSync(fullPath)) {
//     return null;
//   }

//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { content, data } = matter(fileContents);

//   return {
//     id,
//     content,
//     ...data,
//   };
// }