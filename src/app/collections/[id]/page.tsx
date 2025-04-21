import React from "react";
import "./styles.css";
import ClientProductDetails from "../../components/ClientProductDetails";
// import { Props } from "@/app/types/types";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}


const DetailPage = async ({ params }: DetailPageProps) => {
  return <ClientProductDetails params={await params} />;
};

export default DetailPage;
