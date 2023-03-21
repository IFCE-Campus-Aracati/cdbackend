import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677787951541 implements MigrationInterface {
    name = 'default1677787951541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cargos" ("id_cargo" SERIAL NOT NULL, "cargo" text NOT NULL, CONSTRAINT "PK_b1e2aa0613a426c809dff43a75a" PRIMARY KEY ("id_cargo"))`);
        await queryRunner.query(`CREATE TABLE "HoraDisponivel" ("id_hora" SERIAL NOT NULL, "dataInicio" TIMESTAMP WITH TIME ZONE NOT NULL, "dataFim" TIMESTAMP WITH TIME ZONE NOT NULL, "Disponivel" boolean NOT NULL, CONSTRAINT "PK_9b5932922808dc9d4d122eeb6eb" PRIMARY KEY ("id_hora"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id_pedido" SERIAL NOT NULL, "material" text, "prioridade" text NOT NULL, "maquina" text, "estado" text, "arquivo" bytea, "medida" text, "id_horaDisponivel" integer, "id_autorPedido" integer, "id_autorAutorizador" integer, CONSTRAINT "PK_9a67e2a4917b3656d2d23fe8b5e" PRIMARY KEY ("id_pedido"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id_usuario" SERIAL NOT NULL, "nome" text NOT NULL, "email" text NOT NULL, "senha" text NOT NULL, "id_cargo" integer, CONSTRAINT "UQ_09123a64c09426e71457354d875" UNIQUE ("senha"), CONSTRAINT "PK_dfe59db369749f9042499fd8107" PRIMARY KEY ("id_usuario"))`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_208826353b1be16c00ea5a9099a" FOREIGN KEY ("id_horaDisponivel") REFERENCES "HoraDisponivel"("id_hora") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_2dff598b93ad16a3a689da63ccf" FOREIGN KEY ("id_autorPedido") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_8ece1949054651a9c3bf0384783" FOREIGN KEY ("id_autorAutorizador") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_d5bc49a24115cb362400988d1c8" FOREIGN KEY ("id_cargo") REFERENCES "cargos"("id_cargo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_d5bc49a24115cb362400988d1c8"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_8ece1949054651a9c3bf0384783"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_2dff598b93ad16a3a689da63ccf"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_208826353b1be16c00ea5a9099a"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "HoraDisponivel"`);
        await queryRunner.query(`DROP TABLE "cargos"`);
    }

}
