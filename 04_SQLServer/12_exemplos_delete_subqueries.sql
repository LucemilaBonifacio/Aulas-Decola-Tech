USE DB_RH
GO

--1. REMOVENDO UMA �REA  QUE TENHA UM CARGO CADASTRADO
DELETE FROM TB_AREAS WHERE ID = 2

--2. REMOVENDO UMA �REA  QUE N�O TENHA UM CARGO CADASTRADO
DELETE FROM TB_AREAS WHERE ID = 1

--3 REMOVENDO TODAS AS �REAS QUE N�O POSSUEM UM CARGO ASSOCIADO
-- (ISSO INCLUI AS �REAS REPETIDAS)
DELETE FROM TB_AREAS WHERE ID NOT IN (SELECT ID_AREA FROM TB_CARGOS)

