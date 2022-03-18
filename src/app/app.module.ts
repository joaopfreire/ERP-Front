import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ESocialComponent } from './pages/e-social/e-social.component';
import { ReinfComponent } from './pages/reinf/reinf.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { ComissaoComponent } from './pages/comissao/comissao.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { RecursosHumanosComponent } from './pages/recursos-humanos/recursos-humanos.component';
import { ParametrosESocialComponent } from './pages/parametros-e-social/parametros-e-social.component';
import { OrcamentosGMPComponent } from './pages/orcamentos-gmp/orcamentos-gmp.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { BoletoAvulsoComponent } from './pages/financeiro/boleto-avulso/boleto-avulso.component';
import { OrcamentoComponent } from './pages/financeiro/orcamento/orcamento.component';
import { ContasAPagarComponent } from './pages/financeiro/contas-a-pagar/contas-a-pagar.component';
import { ContasAReceberComponent } from './pages/financeiro/contas-a-receber/contas-a-receber.component';
import { CnabContasAReceberComponent } from './pages/financeiro/contas-a-receber/cnab-contas-a-receber/cnab-contas-a-receber.component';
import { ExtratoBancarioComponent } from './pages/financeiro/contas-a-receber/extrato-bancario/extrato-bancario.component';
import { SistemaComponent } from './pages/dashboard/sistema/sistema.component';
import { UsuariosComponent } from './pages/dashboard/sistema/usuarios/usuarios.component';
import { EmpresasComponent } from './pages/dashboard/sistema/empresas/empresas.component';
import { DepartamentosComponent } from './pages/dashboard/sistema/departamentos/departamentos.component';
import { CboComponent } from './pages/dashboard/sistema/cbo/cbo.component';
import { BancoComponent } from './pages/dashboard/sistema/banco/banco.component';
import { VinculosComponent } from './pages/dashboard/sistema/vinculos/vinculos.component';
import { CommonModule } from '@angular/common';
import { GeraisComponent } from './pages/dashboard/gerais/gerais.component';
import { DashboardFinanceiroComponent } from './pages/dashboard/dashboard-financeiro/dashboard-financeiro.component';
import { TarefasComponent } from './pages/dashboard/gerais/tarefas/tarefas.component';
import { MotivosDescontoComponent } from './pages/dashboard/dashboard-financeiro/motivos-desconto/motivos-desconto.component';
import { CargosComponent } from './pages/orcamentos-gmp/cargos/cargos.component';
import { EstabelecimentosComponent } from './pages/relatorios/estabelecimentos/estabelecimentos.component';
import { NaturezaComponent } from './pages/repositorios/natureza/natureza.component';
import { ParametrizacaoComponent } from './pages/comissao/parametrizacao/parametrizacao.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ESocialComponent,
    ReinfComponent,
    RepositoriosComponent,
    ComissaoComponent,
    FinanceiroComponent,
    RelatoriosComponent,
    ParametrosComponent,
    RecursosHumanosComponent,
    ParametrosESocialComponent,
    OrcamentosGMPComponent,
    HeaderComponent,
    SidemenuComponent,
    BoletoAvulsoComponent,
    OrcamentoComponent,
    ContasAPagarComponent,
    ContasAReceberComponent,
    CnabContasAReceberComponent,
    ExtratoBancarioComponent,
    SistemaComponent,
    UsuariosComponent,
    EmpresasComponent,
    DepartamentosComponent,
    CboComponent,
    BancoComponent,
    VinculosComponent,
    GeraisComponent,
    DashboardFinanceiroComponent,
    TarefasComponent,
    MotivosDescontoComponent,
    CargosComponent,
    EstabelecimentosComponent,
    NaturezaComponent,
    ParametrizacaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatBadgeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
