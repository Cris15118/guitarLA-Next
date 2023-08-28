import Layout from "@/components/layout"
import Image from "next/image"
import styles from '@/styles/nosotros.module.css'

function Nosotros() {
  return (
   <Layout 
   title={'Nosotros'}
   description= {'Sobre nosotros, tienda de música'}
   >
   <main className="contenedor">
    <h1 className="heading">Nosotros</h1>
    <div className={styles.contenido}>
      <Image src="/img/nosotros.jpg"  alt="Imagen sobre nosotros" width={1000} height={800}/>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui a tellus feugiat rutrum. Mauris porttitor tempus aliquet. Integer ut augue quis nisi porta sodales. Proin non eleifend erat. Sed ante ligula, elementum ac quam id, eleifend faucibus erat. Phasellus luctus ipsum non purus fringilla placerat. Donec id dui vitae dolor eleifend egestas non vitae libero. Maecenas finibus placerat mi non eleifend. Proin ut eros sed lorem</p>

        <p>Nulla varius faucibus augue, eu rutrum urna vehicula a. Proin tincidunt odio et felis sollicitudin, eget facilisis leo sagittis. Ut vitae metus volutpat, pharetra libero sed, mollis tortor. Phasellus consequat at ligula a lacinia. Nunc commodo ornare justo, ut fermentum metus cursus in. Nulla hendrerit euismod luctus. Ut eget accumsan risus. Fusce auctor sit amet arcu vel lacinia. Suspendisse mollis vestibulum neque, sed laoreet dui euismod a.</p>
      </div>
    </div>

   </main>
   </Layout>
    
 
  )
}
export default Nosotros