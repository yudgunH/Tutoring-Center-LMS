import HeroBanner from "@/components/hero-banner"
import Introduction from "@/components/introduction"
import FeaturedCourses from "@/components/featured-courses"
import TeacherTeam from "@/components/teacher-team"
import Statistics from "@/components/statistics"
import Testimonials from "@/components/testimonials"
import NewsSection from "@/components/news-section"
import ContactForm from "@/components/contact-form"

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

