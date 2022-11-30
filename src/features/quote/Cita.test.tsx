import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import Cita from "./Cita";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cita component", () => {
  it("Should render Cita component", () => {
    render(<Cita />);
    expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
  });
  it("Should render random quote", async () => {
    render(<Cita />);
    const button = screen.getByText("Obtener cita aleatoria");
    userEvent.click(button);
    expect(await screen.findByText("Milhouse Van Houten")).toBeInTheDocument();
  });
  it("Should render Milhouse quote", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Milhouse");
    const button = screen.getByText("Obtener Cita");
    await userEvent.click(button);
    expect(await screen.findByText("Milhouse Van Houten")).toBeInTheDocument();
  });
  it("Should remove the qoute", async () => {
    render(<Cita />);
    const button = screen.getByText("Obtener cita aleatoria");
    await userEvent.click(button);
    expect(await screen.findByText("Milhouse Van Houten")).toBeInTheDocument();
    const cleanButton = screen.getByText("Borrar");
    userEvent.click(cleanButton);
    expect(
      await screen.findByText("No se encontro ninguna cita")
    ).toBeInTheDocument();
  });
});
