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
  selector: 'bh-loanManagement',
  templateUrl: './loanManagement.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loanManagementComponent {
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
      this.sd_98OB3yKjYCgQarsH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_98OB3yKjYCgQarsH(bh) {
    try {
      bh = this.sd_RDfAqbVudXw5QIZB(bh);
      //appendnew_next_sd_98OB3yKjYCgQarsH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_98OB3yKjYCgQarsH');
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
      bh = this.sd_cp51nYJledlKqY8f(bh);
      //appendnew_next_selectedRow
      return bh.input.row;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ONSQD6hfY6OrYfxB');
    }
  }
  //appendnew_flow_loanManagementComponent_start

  sd_RDfAqbVudXw5QIZB(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_hiqKaTtMWsdupDDk(bh);
      //appendnew_next_sd_RDfAqbVudXw5QIZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RDfAqbVudXw5QIZB');
    }
  }

  sd_hiqKaTtMWsdupDDk(bh) {
    try {
      bh = this.sd_PcRtxjnphRGiS4RN(bh);
      //appendnew_next_sd_hiqKaTtMWsdupDDk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hiqKaTtMWsdupDDk');
    }
  }

  sd_PcRtxjnphRGiS4RN(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_l6BcaEy5SYxBnEvo(bh);
      //appendnew_next_sd_PcRtxjnphRGiS4RN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PcRtxjnphRGiS4RN');
    }
  }

  sd_l6BcaEy5SYxBnEvo(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-loans';
      bh = this.sd_UytWztde1wEm86Jb(bh);
      //appendnew_next_sd_l6BcaEy5SYxBnEvo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l6BcaEy5SYxBnEvo');
    }
  }

  async sd_UytWztde1wEm86Jb(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.loanResult = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_293CVRDbGTUuzejv(bh);
      //appendnew_next_sd_UytWztde1wEm86Jb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UytWztde1wEm86Jb');
    }
  }

  sd_293CVRDbGTUuzejv(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(page.loanResult);
      bh = this.sd_OYUtQnmOwCjLj1ir(bh);
      //appendnew_next_sd_293CVRDbGTUuzejv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_293CVRDbGTUuzejv');
    }
  }

  sd_OYUtQnmOwCjLj1ir(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_OYUtQnmOwCjLj1ir
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OYUtQnmOwCjLj1ir');
    }
  }

  sd_cp51nYJledlKqY8f(bh) {
    try {
      const page = this.page;
      page.user = bh.input.row;

      console.log('loan user', page.user);
      page.router.navigate(['/home/Selected Loan']);
      bh = this.sd_7Wn8jGUwjkgLP2Hj(bh);
      //appendnew_next_sd_cp51nYJledlKqY8f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cp51nYJledlKqY8f');
    }
  }

  sd_7Wn8jGUwjkgLP2Hj(bh) {
    try {
      sessionStorage.setItem('userLoan', JSON.stringify(this.page.user));
      //appendnew_next_sd_7Wn8jGUwjkgLP2Hj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7Wn8jGUwjkgLP2Hj');
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
  //appendnew_flow_loanManagementComponent_Catch
}
