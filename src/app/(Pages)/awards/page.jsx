import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users } from 'lucide-react'

export default function AwardsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <h1 className="text-5xl mx-auto font-bold text-center mb-2 pb-2 underline underline-offset-4 decoration-blue-400">
        Celebrating Excellence
      </h1>
      <p className="text-xl text-blue-400  mb-6 text-center drop-shadow-sm">
        in Climate Change and Environmental Sustainability
      </p>
      <p className="text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
        At the World Forum on Climate Change and Environmental Sustainability (WFCCES), 
        we are dedicated to recognizing groundbreaking research and exceptional presentation skills. 
        These prestigious awards celebrate innovation, impact, and the power of effective 
        communication in addressing global environmental challenges.
      </p>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <AwardCard
          icon={<Award className="w-10 h-10 text-blue-600" />}
          title="Best Paper Presentation Award"
          description="This distinguished award honours participants who excel in presenting their research with clarity, confidence, and strong audience engagement."
          highlights={[
            "Recognizes outstanding research communication skills.",
            "Highlights presentations that inspire meaningful dialogue on climate and sustainability."
          ]}
        />

        <AwardCard
          icon={<BookOpen className="w-10 h-10 text-blue-600" />}
          title="Best Paper Award"
          description="Awarded to the most impactful research paper presented at WFCCES, this accolade celebrates originality, depth, and its potential to contribute to the global sustainability agenda."
          highlights={[
            "Honors exceptional research that addresses pressing environmental issues.",
            "Acknowledges innovative solutions and transformative ideas."
          ]}
        />

        <AwardCard
          icon={<Users className="w-10 h-10 text-blue-600" />}
          title="Best Interpretation Student Presentation Award"
          description="This special award encourages and rewards the efforts of student researchers who bring fresh perspectives and exceptional interpretation to the conference."
          highlights={[
            "Recognizes creative and impactful presentations by young researchers.",
            "Encourages the next generation of environmental scientists and sustainability advocates."
          ]}
        />
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-blue-600 text-white rounded-md">
          <CardTitle className="text-2xl">Your Moment to Shine</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Seize the opportunity to have your research celebrated on a global stage. 
            WFCCES offers a platform to showcase your ideas, inspire your peers, and gain 
            international recognition for your efforts in advancing climate action and sustainability.
          </p>
          <p className="text-blue-600 leading-relaxed font-semibold text-center mt-6">
            Register now for the World Forum on Climate Change and Environmental Sustainability 
            and take the first step toward winning these prestigious awards.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function AwardCard({ icon, title, description, highlights }) {
  return (
    <Card className="bg-white shadow-lg h-full flex flex-col">
      <CardHeader className="flex flex-col items-center pt-6 pb-2">
        {icon}
        <CardTitle className="text-xl text-center mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <Badge variant="outline" className="mr-2 mt-1 flex-shrink-0">•</Badge>
              <span className="text-gray-700 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

