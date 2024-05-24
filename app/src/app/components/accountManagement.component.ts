// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-accountManagement',
  templateUrl: './accountManagement.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class accountManagementComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_6r7qmumVVkInGdV9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6r7qmumVVkInGdV9(bh) {
    try {
      bh = this.sd_fDHN0mNPVi1zaQ6s(bh);
      //appendnew_next_sd_6r7qmumVVkInGdV9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6r7qmumVVkInGdV9');
    }
  }

  selectedRow(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_QIEh3TtuD6YXjx8j(bh);
      //appendnew_next_selectedRow
      return bh.input.row;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CkQ2jRDyupuM2qfC');
    }
  }
  //appendnew_flow_accountManagementComponent_start

  sd_fDHN0mNPVi1zaQ6s(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_HZ79ko57J8XRbUn2(bh);
      //appendnew_next_sd_fDHN0mNPVi1zaQ6s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fDHN0mNPVi1zaQ6s');
    }
  }

  sd_HZ79ko57J8XRbUn2(bh) {
    try {
      this.page.dataArray = 'http://localhost:8081/api/get-customers';
      bh = this.sd_rE7SXZMEPMi9S8s3(bh);
      //appendnew_next_sd_HZ79ko57J8XRbUn2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HZ79ko57J8XRbUn2');
    }
  }

  async sd_rE7SXZMEPMi9S8s3(bh) {
    try {
      let requestOptions = {
        url: this.page.dataArray,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_KfAwo11d4CCCFiA3(bh);
      //appendnew_next_sd_rE7SXZMEPMi9S8s3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rE7SXZMEPMi9S8s3');
    }
  }

  sd_KfAwo11d4CCCFiA3(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(page.result);
      bh = this.sd_7up3TRSLj4LZG2JP(bh);
      //appendnew_next_sd_KfAwo11d4CCCFiA3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KfAwo11d4CCCFiA3');
    }
  }

  sd_7up3TRSLj4LZG2JP(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_7up3TRSLj4LZG2JP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7up3TRSLj4LZG2JP');
    }
  }

  sd_QIEh3TtuD6YXjx8j(bh) {
    try {
      const page = this.page;
      page.user = bh.input.row;
      page.router.navigate(['/home/Selected Account']);
      bh = this.sd_HGurTGh0PaCNeEsH(bh);
      //appendnew_next_sd_QIEh3TtuD6YXjx8j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QIEh3TtuD6YXjx8j');
    }
  }

  sd_HGurTGh0PaCNeEsH(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.user));
      //appendnew_next_sd_HGurTGh0PaCNeEsH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HGurTGh0PaCNeEsH');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_accountManagementComponent_Catch
}
