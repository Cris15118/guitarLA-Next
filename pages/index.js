import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Layout  
    title={'Inicio'}
    description= {'Venta de guitarras, blog de música y más'}
    >
      <h1>hola mundo desde next</h1>
      <Link href="/nosotros">nosotros</Link> 
    </Layout>
      
    </>
  );
}
