import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import DetailsView from "../DetailsView";

export const mockedMinifig = {
  set_num: "fig-000029",
  name: "Harry Potter, Open Dark Blue Jacket over White Shirt, Dark Bluish Gray Legs",

  set_img_url: "https://cdn.rebrickable.com/media/sets/fig-000029/60572.jpg",
  set_url:
    "https://rebrickable.com/minifigs/fig-000029/harry-potter-open-dark-blue-jacket-over-white-shirt-dark-bluish-gray-legs/",
};

const mockProps = {
  selectedMinifig: mockedMinifig,
  selectedMinifigParts: [],
  summaryModalVisible: false,
  onSummaryModalClose: jest.fn(),
  openSummaryModal: jest.fn(),
  onSubmit: jest.fn(),
};

describe("DetailsView", () => {
  it("renders detailsView component when props are passed", () => {
    const { root } = render(
      <Provider store={store}>
        <DetailsView {...mockProps} />
      </Provider>
    );
    expect(root).toBeDefined();
  });
});
