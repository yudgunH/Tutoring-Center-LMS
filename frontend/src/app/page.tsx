import HeroBanner from "@/components/home/hero-banner"
import Introduction from "@/components/home/introduction"
import FeaturedCourses from "@/components/home/featured-courses"
import TeacherTeam from "@/components/home/teacher-team"
import Statistics from "@/components/home/statistics"
import Testimonials from "@/components/home/testimonials"
import NewsSection from "@/components/home/news-section"
import ContactForm from "@/components/home/contact-form"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <Introduction />
      <FeaturedCourses />
      <TeacherTeam />
      <Statistics />
      <Testimonials />
      <NewsSection />
      <ContactForm />
    </main>
  )
}

