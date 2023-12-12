import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout title="Home">
      <article className="container" data-theme="dark">
        <div className="HomeName grid">
          <div>
            <h1>iMDB Home</h1>
          </div>
          <div></div>
          <div className="HomeBtnLogin">
            <Link to="/Login">Login</Link>
          </div>
        </div>

        <div className="signInfooter">
          <Link to="/SignUp">SignIn Here</Link>
          <span></span>
          <p>Create a Account ?</p>
        </div>
      </article>
    </Layout>
  );
};

export default Home;
