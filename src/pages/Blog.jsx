import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { Link, useLoaderData, Form } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Blog";
import { useAuthContext } from "../context/AuthContext";
import { BackLink } from "../components";

export const loader = async ({ request }) => {
  const docsRef = collection(db, "blog");
  try {
    const q = query(docsRef, orderBy("createdAt", "desc"));
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (error) {
    console.log(error);
    toast.error(`Error uploading blogs...`);
    return error;
  }
};

const Blog = () => {
  const { user } = useAuthContext();
  console.log(user);
  const data = useLoaderData();

  return (
    <Wrapper>
      <div className="blog-container">
        <div className="header">
          <BackLink linkText="back to home" link={"/"} color="accent" />
          <h2>Blog</h2>

          {user?.role === "admin" ? (
            <Link to="/dashboard/create-blog" className="btn btn-accent">
              Create Blog
            </Link>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          {data.map((blog) => (
            <div className="blog">
              <div key={blog.id} className="blog-info">
                <h3 className="blog-title">{blog.title}</h3>
                {user?.role === "admin" && (
                  <div className="blog-action">
                    <Link
                      to={`../dashboard/edit-blog/${blog.id}`}
                      className="btn-icon"
                    >
                      <FaRegEdit />
                    </Link>
                    <Form
                      method="post"
                      action={`../dashboard/delete-blog/${blog.id}`}
                    >
                      <button type="submit" className="btn-icon">
                        <FiTrash />
                      </button>
                    </Form>
                  </div>
                )}
              </div>

              <p
                dangerouslySetInnerHTML={{ __html: blog.description }}
                className="blog-description"
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Blog;
