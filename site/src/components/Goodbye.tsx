import * as React from "react";

export interface GoodbyeProps { compiler: string; framework: string; }

export const Goodbye = (props: GoodbyeProps) => <h1>Goodbye from {props.compiler} and {props.framework}!</h1>;
