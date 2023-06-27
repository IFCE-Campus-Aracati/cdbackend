import { MigrationInterface, QueryRunner } from "typeorm";

export class default1687109407340 implements MigrationInterface {
    name = 'default1687109407340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`medida\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`cor\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`descricao\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD \`comentario\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` CHANGE \`estado\` \`estado\` text ('0', '1', '2', '3', '4') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_feaa58d9634e2758729f20154b6\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_32028fc5ea024bb0f60d97f481e\` FOREIGN KEY (\`id_autorAutorizadorAnonimo\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_32028fc5ea024bb0f60d97f481e\``);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_feaa58d9634e2758729f20154b6\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` CHANGE \`estado\` \`estado\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD COLUMN \`comentario\`text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD COLUMN \`descricao\`text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD COLUMN \`cor\`text NULL`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP COLUMN \`medida\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horadisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
