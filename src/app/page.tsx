import { Button } from "@/components/ui/button"
import { perks } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="row">
          <div className="col col-1 centered">
            <h2 className="heading">Elevate Your Style, <span className="text-shiny">Redefine Every Look</span></h2>
            <p className="subheading max-w-3xl">Discover timeless fashion pieces that blend elegance with modern trends, meticulously crafted to perfection just for you.</p>
            <Button size="lg" className="mt-2 bg-shiny hover:bg-blue-700 ease-in duration-200 text-white">Browse collection</Button>
          </div>
        </div>
      </section>
      <section className="perks">
        <div className="row">
          <div className="col">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                perks?.map(perk => {
                  return <Card key={perk?.id}>
                    <CardHeader>
                      <perk.icon className="text-5xl mx-auto border-2 p-3 rounded-full mb-1 bg-blue-200 text-black" />
                      <CardTitle className="text-shiny text-xl font-semibold">{perk?.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{perk?.desc}</p>
                    </CardContent>
                  </Card>
                })
              }
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div className="row">
          <div className="col"></div>
        </div>
      </section> */}
    </main>
  );
}
