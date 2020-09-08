export type GetStateFunc = any;
export type GenericAction = {
  type: string;
  payload?: any;
  data?: any;
  meta?: any;
  error?: any;
  timestamp?: number;
  [extraProps: string]: any;
};

export type Action = GenericAction;

export type DispatchFunc = (action: Action, getState?: GetStateFunc | null) => Promise<ActionResult>;

export type ActionResult = { data: any } | { error: any };

export type ActionFunc = (
  dispatch: DispatchFunc,
  getState?: GetStateFunc
) => Promise<ActionResult | ActionResult[]> | ActionResult;

export type Reducer<S = any, A extends Action = Action> = (state: S | undefined, action: A) => S;
export type Thunk = (b: DispatchFunc, a: GetStateFunc) => Promise<ActionResult> | ActionResult;
