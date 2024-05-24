// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { DatePipe } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Reports',
  templateUrl: './Reports.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ReportsComponent {
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
      this.sd_ufJSuWzjbrEAJKtM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ufJSuWzjbrEAJKtM(bh) {
    try {
      bh = this.sd_FUCWX8JLQb5hCT7C(bh);
      //appendnew_next_sd_ufJSuWzjbrEAJKtM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ufJSuWzjbrEAJKtM');
    }
  }

  addLoans(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_XmddD2zsZRBRSt5F(bh);
      //appendnew_next_addLoans
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lNXpgD4z0uGbNhrL');
    }
  }
  //appendnew_flow_ReportsComponent_start

  sd_FUCWX8JLQb5hCT7C(bh) {
    try {
      bh = this.sd_yejAp2yyrgV5htH6(bh);
      //appendnew_next_sd_FUCWX8JLQb5hCT7C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FUCWX8JLQb5hCT7C');
    }
  }

  sd_yejAp2yyrgV5htH6(bh) {
    try {
      bh = this.sd_W4eVynEP5bq3lmAn(bh);
      //appendnew_next_sd_yejAp2yyrgV5htH6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yejAp2yyrgV5htH6');
    }
  }

  sd_W4eVynEP5bq3lmAn(bh) {
    try {
      this.page.datePipe = DatePipe;
      bh = this.sd_LveZHP70KdonnkIW(bh);
      //appendnew_next_sd_W4eVynEP5bq3lmAn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W4eVynEP5bq3lmAn');
    }
  }

  sd_LveZHP70KdonnkIW(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_RAYCgIvcv6u00hCH(bh);
      //appendnew_next_sd_LveZHP70KdonnkIW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LveZHP70KdonnkIW');
    }
  }

  sd_RAYCgIvcv6u00hCH(bh) {
    try {
      const page = this.page;
      bh.sumbit = true;
      bh.url = bh.ssdUrl + 'get-customers';
      bh.urlLoans = bh.ssdUrl + 'get-loans';
      // page.loader = true;
      // console.log(bh.input.form)
      bh = this.sd_VcK9Ma3rSdE0JJWP(bh);
      //appendnew_next_sd_RAYCgIvcv6u00hCH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RAYCgIvcv6u00hCH');
    }
  }

  sd_VcK9Ma3rSdE0JJWP(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.sumbit,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_VS8xIRRCrbv7SSQi(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VcK9Ma3rSdE0JJWP');
    }
  }

  async sd_VS8xIRRCrbv7SSQi(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.resultAccounts = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_Fp1qYYWBw3IPWIyt(bh);
      //appendnew_next_sd_VS8xIRRCrbv7SSQi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VS8xIRRCrbv7SSQi');
    }
  }

  async sd_Fp1qYYWBw3IPWIyt(bh) {
    try {
      let requestOptions = {
        url: bh.urlLoans,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userData,
      };
      this.page.resultLoan = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_3kmljMJkUYUoPVOE(bh);
      //appendnew_next_sd_Fp1qYYWBw3IPWIyt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fp1qYYWBw3IPWIyt');
    }
  }

  sd_3kmljMJkUYUoPVOE(bh) {
    try {
      const page = this.page;
      bh.updated = page.resultAccounts.filter(
        (resultAccounts: any) =>
          resultAccounts.status === 'approved' ||
          resultAccounts.status === 'rejected'
      );
      bh.updatedLoans = page.resultLoan.filter(
        (resultLoan: any) =>
          resultLoan.status === 'approved' || resultLoan.status === 'rejected'
      );

      bh.data = bh.updated.concat(bh.updatedLoans);

      bh.local.dataSource = new MatTableDataSource(bh.data);

      console.log('accounts', bh.updated);
      console.log('loans', bh.updatedLoans);

      console.log('data from accounts', bh.local.dataSource);

      console.log('updated: ', bh.updated);

      // console.log(bh.data)
      bh = this.sd_UcyCXgudi5PelR5R(bh);
      //appendnew_next_sd_3kmljMJkUYUoPVOE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3kmljMJkUYUoPVOE');
    }
  }

  sd_UcyCXgudi5PelR5R(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_UcyCXgudi5PelR5R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UcyCXgudi5PelR5R');
    }
  }

  sd_XmddD2zsZRBRSt5F(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_KRDzpGTTSj6pHhnd(bh);
      //appendnew_next_sd_XmddD2zsZRBRSt5F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XmddD2zsZRBRSt5F');
    }
  }

  sd_KRDzpGTTSj6pHhnd(bh) {
    try {
      const page = this.page;
      bh.sumbit = true;
      bh.url = bh.ssdUrl + 'get-loans';

      // page.loader = true;
      // console.log(bh.input.form)
      bh = this.sd_9r5l6RNYekZkq78M(bh);
      //appendnew_next_sd_KRDzpGTTSj6pHhnd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KRDzpGTTSj6pHhnd');
    }
  }

  sd_9r5l6RNYekZkq78M(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.sumbit,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Q2p9IcWkidOt3rek(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9r5l6RNYekZkq78M');
    }
  }

  async sd_Q2p9IcWkidOt3rek(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_iD3PRPEFaXdAFYH8(bh);
      //appendnew_next_sd_Q2p9IcWkidOt3rek
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q2p9IcWkidOt3rek');
    }
  }

  sd_iD3PRPEFaXdAFYH8(bh) {
    try {
      const page = this.page;
      bh.updatedLoans = page.result.filter(
        (result: any) =>
          result.status === 'approved' || result.status === 'rejected'
      );
      console.log('loans', bh.updatedLoans);
      console.log('updated: ', bh.updated);
      bh.data = bh.updated.concat(bh.updatedLoans);

      // bh.local.dataSource = new MatTableDataSource(bh.data);
      //appendnew_next_sd_iD3PRPEFaXdAFYH8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iD3PRPEFaXdAFYH8');
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
  //appendnew_flow_ReportsComponent_Catch
}
