import React from "react";
import { HighlightCard } from "../../components/Card";
import { TransactionsCard } from "../../components/TransactionsCard";

import {
  Container,
  Header,
  UseInfor,
  Photo,
  User,
  UserGreting,
  UserName,
  UserWrapper,
  Icon,
  HightLigthCards,
  Transactions,
  Title,
} from "./styles";

export function Dashboard() {
  return (
    <>
      <Container>
        <Header>
          <UserWrapper>
            <UseInfor>
              <User>
                <UserGreting>Olá,</UserGreting>
                <UserName>Lucas</UserName>
              </User>
            </UseInfor>
            <Icon name="power" />
          </UserWrapper>
        </Header>
        <HightLigthCards
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
        >
          <HighlightCard
            title="Entradas"
            amount="R$ 17.400,00"
            lastTransaction="Última entrada dia 13 de abril"
            type="up"
          />
          <HighlightCard
            title="Saídas"
            amount="R$ 1.259,00"
            lastTransaction="Última saída dia 03 de abril"
            type="down"
          />
          <HighlightCard
            title="Total"
            amount="R$ 16.141,00"
            lastTransaction="01 à 16 de abril"
            type="total"
          />
        </HightLigthCards>
        <Transactions>
          <Title>Listagem</Title>
          <TransactionsCard />
          <TransactionsCard />
        </Transactions>
      </Container>
    </>
  );
}
