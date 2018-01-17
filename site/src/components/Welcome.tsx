import * as React from "react";

export interface GoodbyeProps { compiler: string; framework: string; }

export const Welcome = (props: GoodbyeProps) => <h1>Welcome from {props.compiler} and {props.framework}!</h1>;
