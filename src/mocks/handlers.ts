import { rest } from "msw";
import { API_URL } from "../app/constants";

const randomQuoteMock = [{
  quote: "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
  character: "Milhouse Van Houten",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
  characterDirection: "Right"
}]

const homerQuoteMock = [{
  quote: "Oh, so they have Internet on computers now!",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right"
}]

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    if (req.url.searchParams.get("character")) {
      return res(
      ctx.status(200),
      ctx.json(homerQuoteMock)
    )
    }
    return res(
      ctx.status(200),
      ctx.json(
        randomQuoteMock
      )
    )

  }),
 
]

export { randomQuoteMock,homerQuoteMock, handlers }