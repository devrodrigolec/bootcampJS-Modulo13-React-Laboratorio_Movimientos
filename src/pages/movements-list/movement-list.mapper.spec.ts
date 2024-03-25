import { ApiModelMovementsList } from "./api";
import { ViewModelMovementList } from "./movement-list.vm";
import { mapApiModelToViewModelMovementList } from "./movement-list.mapper";
import { mockMovimientos } from "./mockMovimientos";


describe('./movement-list.mapper.ts', () => {
  it('shold return a vm model', () => {
    //Arrange
    const mockMovement : ApiModelMovementsList[] = mockMovimientos;
    //Act
    const result : ViewModelMovementList[]= mapApiModelToViewModelMovementList(mockMovement);
    //Assert
    expect(result).toEqual([
      {
        id: "1",
        description: "Nómina noviembre",
        amount: "900",
        balance: "1490",
        transaction: new Date("2019-12-09T21:30:00"),
        realTransaction: new Date("2019-12-09T21:30:00"),
        accountId: "1",
      },
      {
        id: "2",
        description: "Alquiler noviembre",
        amount: "-400",
        balance: "590",
        transaction: new Date("2019-12-07T11:30:00"),
        realTransaction: new Date ("2019-12-08T20:00:10"),
        accountId: "1",
      },
      {
        id: "3",
        description: "Gastos móvil",
        amount: "-24",
        balance: "990",
        transaction: new Date("2019-12-01T07:01:00"),
        realTransaction: new Date("2019-12-02T12:00:10"),
        accountId: "1",
      },
    ])
  })
})