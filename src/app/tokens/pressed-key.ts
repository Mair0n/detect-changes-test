import { InjectionToken, inject } from "@angular/core";
import { Observable, fromEvent } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { map } from "rxjs/operators";

/**
 * It is the same token like in a sample with useFactory but
 * it is implemented an another way.
 *
 * This time we do not need to provide it directly in "providers" array
 */
export const PRESSED_KEY = new InjectionToken<Observable<string>>(
  "Keyboard press stream",
  {
    /**
     * When a component asks for a PRESSED_KEY the first time,
     * the factory called once
     */
    factory: () => {
      /**
       * Use "inject" function from @angular/core to use
       * data from other tokens here
       */
      const documentRef = inject(DOCUMENT);

      return fromEvent(documentRef.body, "keydown").pipe(
        map((event: KeyboardEvent) => event.key)
      );
    }
  }
);
