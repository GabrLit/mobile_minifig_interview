import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { HomeView } from "../HomeView";
import { placeholders } from "../../../placeholders";
import "@testing-library/jest-native/extend-expect";
import { fireEvent } from "@testing-library/react-native";
import { colors } from "../../../styles";
import { mockFlatlist } from "./mockups";

const mockProps = {
  flatlistData: mockFlatlist,
  selectedMinifig: null,
  webViewUrl: null,
  openWebView: jest.fn(),
  onWebViewClose: jest.fn(),
  onChooseBtnPress: jest.fn(),
  onSelection: jest.fn(),
};

describe("HomeView", () => {
  it("renders homeview component when props are passed", () => {
    const { root } = render(<HomeView {...mockProps} />);
    expect(root).toBeDefined();
  });

  it("renders correct title", () => {
    const { getByText } = render(<HomeView {...mockProps} />);
    const title = getByText(placeholders.home.title);
    expect(title).toBeDefined();
  });

  it("renders a button with the correct text", () => {
    const { getByText } = render(<HomeView {...mockProps} />);
    const button = getByText(placeholders.home.button);
    expect(button).toBeDefined();
  });

  it("renders WebViewModal component when webViewUrl prop is provided", () => {
    const webViewUrl = "https://example.com";
    const { getByTestId } = render(
      <HomeView {...mockProps} webViewUrl={webViewUrl} />
    );
    const webViewModal = getByTestId("web-view-modal");
    expect(webViewModal).toBeDefined();
  });

  it("highlights selected minifigCard with orange border", () => {
    const { getByTestId } = render(
      <HomeView {...mockProps} selectedMinifig={mockFlatlist[2]} />
    );
    const minifigCard = getByTestId(`minifig-${mockFlatlist[2].set_num}`);
    expect(minifigCard).toHaveStyle({ borderColor: colors.orange });
  });

  it("calls onSelection with correct minifigId when card is clicked ", async () => {
    const onSelection = jest.fn();
    const { getByTestId } = render(
      <HomeView {...mockProps} onSelection={onSelection} />
    );
    const minifigCard = getByTestId(`minifig-${mockFlatlist[1].set_num}`);

    fireEvent.press(minifigCard);
    return waitFor(() =>
      expect(onSelection).toHaveBeenCalledWith(mockFlatlist[1])
    );
  });

  it("choose figure calls right handler", async () => {
    const onChooseBtnPress = jest.fn();
    const { getByText } = render(
      <HomeView
        {...mockProps}
        onChooseBtnPress={onChooseBtnPress}
        selectedMinifig={mockFlatlist[0]}
      />
    );
    const button = getByText(placeholders.home.button);
    fireEvent.press(button);
    return waitFor(() => expect(onChooseBtnPress).toHaveBeenCalledTimes(1));
  });
});
