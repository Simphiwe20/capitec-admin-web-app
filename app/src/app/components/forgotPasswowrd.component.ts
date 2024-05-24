// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-forgotPasswowrd',
  templateUrl: './forgotPasswowrd.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forgotPasswowrdComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_PsOyi5kSzjhJ2DrJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PsOyi5kSzjhJ2DrJ(bh) {
    try {
      bh = this.sd_WjiIzzwjZaoJXURi(bh);
      //appendnew_next_sd_PsOyi5kSzjhJ2DrJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PsOyi5kSzjhJ2DrJ');
    }
  }

  sd_YIrGoHpekiUg6eP9(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_ajo2bp8f9UKLyAbu(bh);
      //appendnew_next_sd_YIrGoHpekiUg6eP9
      return bh.input.form;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YIrGoHpekiUg6eP9');
    }
  }
  //appendnew_flow_forgotPasswowrdComponent_start

  sd_WjiIzzwjZaoJXURi(bh) {
    try {
      this.page.emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
      this.page.submitted = false;
      this.page.userDetails = { email: '' };
      this.page.url = undefined;
      //appendnew_next_sd_WjiIzzwjZaoJXURi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WjiIzzwjZaoJXURi');
    }
  }

  sd_ajo2bp8f9UKLyAbu(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_yYwROCU8jNgaD8Ub(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ajo2bp8f9UKLyAbu');
    }
  }

  sd_yYwROCU8jNgaD8Ub(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_AanO8EACgAAmpCL4(bh);
      //appendnew_next_sd_yYwROCU8jNgaD8Ub
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yYwROCU8jNgaD8Ub');
    }
  }

  sd_AanO8EACgAAmpCL4(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh.url = bh.url + 'get-admin';
      // page.loader = true;
      console.log(bh.input.form);
      console.log(page.userDetails);

      bh = this.sd_L1QgRt7XT495Ri4j(bh);
      //appendnew_next_sd_AanO8EACgAAmpCL4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AanO8EACgAAmpCL4');
    }
  }

  async sd_L1QgRt7XT495Ri4j(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_2KUDClDQIvTBGlLj(bh);
      //appendnew_next_sd_L1QgRt7XT495Ri4j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L1QgRt7XT495Ri4j');
    }
  }

  sd_2KUDClDQIvTBGlLj(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.userDetails.email,
          bh.result.email,
          undefined,
          undefined
        )
      ) {
      } else if (
        this.sdService.operators['sne'](
          this.page.userDetails.email,
          bh.result.email,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_nsoHQdI24ruAd527(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2KUDClDQIvTBGlLj');
    }
  }

  sd_nsoHQdI24ruAd527(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Incorrect email address', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_nsoHQdI24ruAd527
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nsoHQdI24ruAd527');
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
  //appendnew_flow_forgotPasswowrdComponent_Catch
}
