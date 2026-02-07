import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./Article-List";

console.log(blogData);

function App() {
  return (
    <div>
      <Header />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} /> {}
    </div>
  );
}

export default App;
