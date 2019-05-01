"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const PessoaService_1 = require("../../services/pessoa/PessoaService");
let PessoaCtrl = class PessoaCtrl {
    constructor(pessoaService) {
        this.pessoaService = pessoaService;
    }
    cadastraPessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pessoaService.cadastrar(pessoa);
        });
    }
    buscarPeloId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pessoaService.buscarPeloId(id);
        });
    }
    buscarTodasPessoas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pessoaService.buscarTodos();
        });
    }
    atualizarPessoa(id, pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pessoaService.atualizaPessoa(id, pessoa);
        });
    }
    deletarPessoa(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pessoaService.removePessoa(id);
        });
    }
};
__decorate([
    common_1.Post("/"),
    __param(0, common_1.BodyParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PessoaCtrl.prototype, "cadastraPessoa", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.PathParams("id")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoaCtrl.prototype, "buscarPeloId", null);
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoaCtrl.prototype, "buscarTodasPessoas", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.PathParams("id")), __param(1, common_1.BodyParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PessoaCtrl.prototype, "atualizarPessoa", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.PathParams("id")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoaCtrl.prototype, "deletarPessoa", null);
PessoaCtrl = __decorate([
    common_1.Controller("/pessoa"),
    __metadata("design:paramtypes", [PessoaService_1.PessoaService])
], PessoaCtrl);
exports.PessoaCtrl = PessoaCtrl;
//# sourceMappingURL=PessoaCtrl.js.map