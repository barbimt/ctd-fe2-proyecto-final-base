import { rest } from "msw";
import { API_URL } from "../app/constants";

const randomQuoteMock = [{
  quote: "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
  character: "Milhouse Van Houten",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
  characterDirection: "Right"
}]

const milhouseQuoteMock = [{
  quote: "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
  character: "Milhouse Van Houten",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
  characterDirection: "Right"
}]

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    console.log("ejecutandose");
    return res(
      //podemos acceder al status de nuestra respuesta
      ctx.status(200),
      //parsear la data -> no la tenemos todavia
      ctx.json(
        randomQuoteMock
      )
    )

  }),
  rest.get(API_URL+"?character=Milhouse",(req, res, ctx)=> {
    return res(
      ctx.status(200),
      ctx.json(milhouseQuoteMock)
    )
  })
]

export { randomQuoteMock,milhouseQuoteMock, handlers }