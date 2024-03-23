export const routesPrefixes  = {
  accountList : '/account-list',
  transfer: '/transfer'
}


export const appRoutes = {
  root: "/",
  acoountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
