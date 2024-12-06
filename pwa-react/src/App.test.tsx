import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Routing", () => {
  test("renders MainPage at '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    // 특정 DOM 요소를 기준으로 테스트
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  // test("renders Features at '/features' route", () => {
  //   render(
  //     <MemoryRouter initialEntries={["/features"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   // 특정 버튼이나 클래스 이름 기준 테스트
  //   expect(
  //     screen.getByRole("button", { name: /features/i })
  //   ).toBeInTheDocument();
  // });
});
