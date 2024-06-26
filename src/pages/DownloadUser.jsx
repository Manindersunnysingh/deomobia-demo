import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Table";
import { useAuthContext } from "../context/AuthContext";
import { BackLink } from "../components";
import { fromUnixTime, format } from "date-fns";

export const loader = async ({ request }) => {
  const docsRef = collection(db, "download_users");
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
    toast.error(`Error uploading contacts...`);
    return error;
  }
};

const DownloadUser = () => {
  const { user } = useAuthContext();
  let data = useLoaderData();

  return (
    <Wrapper>
      <div className="contactus-container">
        <BackLink linkText="back to home" link={"/"} color="accent" />
        {data.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((downloadUser) => (
                <tr key={downloadUser.id}>
                  <td>{downloadUser.name}</td>
                  <td>{downloadUser.email}</td>
                  <td>{downloadUser.phone}</td>
                  <td>
                    {format(
                      fromUnixTime(downloadUser.createdAt.seconds),
                      "yyyy-MM-dd"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "No record found"
        )}
      </div>
    </Wrapper>
  );
};
export default DownloadUser;
