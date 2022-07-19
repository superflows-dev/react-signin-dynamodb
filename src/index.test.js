import { SignIn } from '.'
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fireEvent} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Render", () => {
  act(() => {
    render(<SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      onSubmitResult={() => {}}
      awsRegion="ap-south-1"
      awsSecret="qtYSxtOvpPXZ/+bbW6Z9h+frKep/GzaZDqRwefbE"
      awsKey="AKIASUWOWMZOYHW4WE77"
      template="TemplateOtp1"
      project="SF-21"
      emailerSource="superflowsapp3@gmail.com"
    />, container);
  });
  expect(container.textContent).toContain("Email");
  expect(container.textContent).toContain("Sign In");

});

it("Auto focus on input", () => {

  act(() => {
    render(<SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      onSubmitResult={() => {}}
      awsRegion="ap-south-1"
      awsSecret="qtYSxtOvpPXZ/+bbW6Z9h+frKep/GzaZDqRwefbE"
      awsKey="AKIASUWOWMZOYHW4WE77"
      template="TemplateOtp1"
      project="SF-21"
      emailerSource="superflowsapp3@gmail.com"
    />, container);
  });
  
  const input1 = container.getElementsByTagName('input')[0];
  expect(input1).toHaveFocus();

});

it("Submit button should be initially disabled", () => {

  act(() => {
    render(<SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      onSubmitResult={() => {}}
      awsRegion="ap-south-1"
      awsSecret="qtYSxtOvpPXZ/+bbW6Z9h+frKep/GzaZDqRwefbE"
      awsKey="AKIASUWOWMZOYHW4WE77"
      template="TemplateOtp1"
      project="SF-21"
      emailerSource="superflowsapp3@gmail.com"
    />, container);
  });
  
  const button1 = container.getElementsByTagName('button')[0];
  expect(button1).toHaveAttribute('disabled');

});

it("Submit button should enable / disable after valid / invalid email value", async () => {

  act(() => {
    render(<SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      onSubmitResult={() => {}}
      awsRegion="ap-south-1"
      awsSecret="qtYSxtOvpPXZ/+bbW6Z9h+frKep/GzaZDqRwefbE"
      awsKey="AKIASUWOWMZOYHW4WE77"
      template="TemplateOtp1"
      project="SF-21"
      emailerSource="superflowsapp3@gmail.com"
    />, container);
  });
  
  var input1 = container.getElementsByTagName('input')[0];
  var button1 = container.getElementsByTagName('button')[0];

  act(() => {
    fireEvent.change(input1, { target: { value: 'h@gmail.co' } })
    fireEvent.keyUp(input1, {
      key: "m",
      code: "m",
      keyCode: 77,
      charCode: 77
    })
  });
  await new Promise((r) => setTimeout(r, 1000));
  act(() => {
    fireEvent.keyUp(input1, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    })
  });

  expect(button1.disabled).toEqual(false);

  act(() => {
    fireEvent.change(input1, { target: { value: 'hgmail.co' } })
    fireEvent.keyUp(input1, {
      key: "m",
      code: "m",
      keyCode: 77,
      charCode: 77
    })
  });
  await new Promise((r) => setTimeout(r, 1000));
  act(() => {
    fireEvent.keyUp(input1, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    })
  });

  expect(button1.disabled).toEqual(true);

  await new Promise((r) => setTimeout(r, 1000));

});

it("Valid and existing email", async () => {

  act(() => {
    render(<SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      onSubmitResult={() => {}}
      awsRegion="ap-south-1"
      awsSecret="qtYSxtOvpPXZ/+bbW6Z9h+frKep/GzaZDqRwefbE"
      awsKey="AKIASUWOWMZOYHW4WE77"
      template="TemplateOtp1"
      project="SF-21"
      emailerSource="superflowsapp3@gmail.com"
    />, container);
  });
  
  var input1 = container.getElementsByTagName('input')[0];

  act(() => {
    fireEvent.change(input1, { target: { value: 'hrushi.mehendale@gmail.com' } })
    fireEvent.keyUp(input1, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 1000));
  act(() => {
    fireEvent.keyUp(input1, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    })
  });

  await new Promise((r) => setTimeout(r, 1000));

  const mock = jest.fn();
  let result = mock("onClick")

  expect(mock).toHaveBeenCalledTimes(1);

  await new Promise((r) => setTimeout(r, 2000));

});