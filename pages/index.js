import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div className="page-wrapper">
        <div className="container">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
