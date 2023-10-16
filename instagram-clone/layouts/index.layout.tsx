import Header from '@/layouts/reuseable/header'
import Footer from '@/layouts/reuseable/footer'

export default function Layout({children}:any) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}