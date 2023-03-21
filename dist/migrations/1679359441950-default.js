"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1679359441950 = void 0;
class default1679359441950 {
    constructor() {
        this.name = 'default1679359441950';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "pedidosAnonimo" ("id_pedidoAnonimo" SERIAL NOT NULL, "material" text, "maquina" text, "estado" text, "arquivo" bytea, "medida" text, "codigo" text, "id_horaDisponivel" integer, "id_autorAutorizadorAnonimo" integer, CONSTRAINT "PK_31930a3b55703417d4b5fb988e6" PRIMARY KEY ("id_pedidoAnonimo"))`);
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" ADD CONSTRAINT "FK_feaa58d9634e2758729f20154b6" FOREIGN KEY ("id_horaDisponivel") REFERENCES "HoraDisponivel"("id_hora") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" ADD CONSTRAINT "FK_32028fc5ea024bb0f60d97f481e" FOREIGN KEY ("id_autorAutorizadorAnonimo") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" DROP CONSTRAINT "FK_32028fc5ea024bb0f60d97f481e"`);
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" DROP CONSTRAINT "FK_feaa58d9634e2758729f20154b6"`);
        await queryRunner.query(`DROP TABLE "pedidosAnonimo"`);
    }
}
exports.default1679359441950 = default1679359441950;
