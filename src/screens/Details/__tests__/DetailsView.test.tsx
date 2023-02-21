import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import DetailsView from "../DetailsView";
import { mockedMinifig } from "./mockups";

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
