import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { HomeView } from "../HomeView";
import { placeholders } from "../../../placeholders";
import "@testing-library/jest-native/extend-expect";
import { fireEvent } from "@testing-library/react-native";
import { colors } from "../../../styles";

export const mockFlatlist = [
  {
    set_num: "fig-006089",
    name: "Lucius Malfoy, Yellow Skin, Dark Bluish Gray Suit",
    set_img_url: "https://cdn.rebrickable.com/media/sets/fig-006089/60400.jpg",
    set_url:
      "https://rebrickable.com/minifigs/fig-006089/lucius-malfoy-yellow-skin-dark-bluish-gray-suit/",
  },
  {
    set_num: "fig-013030",
    name: "Ron Weasley, Olive Green Jacket, Dirt On Nose",
    set_img_url: "https://cdn.rebrickable.com/media/sets/fig-013030/109352.jpg",
    set_url:
      "https://rebrickable.com/minifigs/fig-013030/ron-weasley-olive-green-jacket-dirt-on-nose/",
  },
  {
    set_num: "fig-006083",
    name: "Dobby, Tan Vest",

    set_img_url: "https://cdn.rebrickable.com/media/sets/fig-006083/60620.jpg",
    set_url: "https://rebrickable.com/minifigs/fig-006083/dobby-tan-vest/",
  },
  {
    set_num: "fig-006067",
    name: "Madame Hooch, Yellow Skin",

    set_img_url: "https://cdn.rebrickable.com/media/sets/fig-006067/60374.jpg",
    set_url:
      "https://rebrickable.com/minifigs/fig-006067/madame-hooch-yellow-skin/",
  },
  {
    set_num: "fig-000029",
    name: "Harry Potter, Open Dark Blue Jacket over White Shirt, Dark Bluish Gray Legs",

    set_img_url: "https://cdn.rebrickable.com/media/sets/fig-000029/60572.jpg",
    set_url:
      "https://rebrickable.com/minifigs/fig-000029/harry-potter-open-dark-blue-jacket-over-white-shirt-dark-bluish-gray-legs/",
  },
];

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
