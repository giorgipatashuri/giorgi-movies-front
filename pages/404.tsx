import { NextPage } from "next"
import Layout from "../src/components/layout/Layout"

const Error404:NextPage = () => {
  return (
    <Layout>
      <div className="text-center text-white">
        404 error page not found
      </div>
    </Layout>
  )
}
export default Error404