"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1687278107421 = void 0;
class default1687278107421 {
    constructor() {
        this.name = 'default1687278107421';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`CREATE TABLE \`horaDisponivel\` (\`id_hora\` int NOT NULL AUTO_INCREMENT, \`dataInicio\` text NOT NULL, \`dataFim\` text NOT NULL, \`disponivel\` tinyint NOT NULL, PRIMARY KEY (\`id_hora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidosAnonimo\` (\`id_pedidoAnonimo\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`maquina\` text NULL, \`estado\` enum ('0', '1', '2', '3') NOT NULL, \`arquivo\` longblob NULL, \`cor\` text NULL, \`descricao\` text NULL, \`comentario\` text NULL, \`codigo\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorAutorizadorAnonimo\` int NULL, PRIMARY KEY (\`id_pedidoAnonimo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`medida\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`cor\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`descricao\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`comentario\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`prioridade\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`prioridade\` enum ('0', '1', '2') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`estado\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`estado\` enum ('0', '1', '2', '3', '4') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_feaa58d9634e2758729f20154b6\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_32028fc5ea024bb0f60d97f481e\` FOREIGN KEY (\`id_autorAutorizadorAnonimo\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_32028fc5ea024bb0f60d97f481e\``);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_feaa58d9634e2758729f20154b6\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`estado\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`estado\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`prioridade\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`prioridade\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`comentario\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`descricao\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`cor\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`medida\` text NULL`);
        await queryRunner.query(`DROP TABLE \`pedidosAnonimo\``);
        await queryRunner.query(`DROP TABLE \`horaDisponivel\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horadisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.default1687278107421 = default1687278107421;
