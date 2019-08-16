import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { OpenSlidesStatusService } from 'app/core/core-services/openslides-status.service';
import { StorageService } from 'app/core/core-services/storage.service';
import { BaseFilterListService, OsFilter, OsFilterOption } from 'app/core/ui-services/base-filter-list.service';
import { ItemVisibilityChoices } from 'app/shared/models/agenda/item';
import { ViewItem } from '../models/view-item';

/**
 * Filter the agenda list
 */
@Injectable({
    providedIn: 'root'
})
export class AgendaFilterListService extends BaseFilterListService<ViewItem> {
    /**
     * Constructor. Also creates the dynamic filter options
     *
     * @param store
     * @param translate Translation service
     */
    public constructor(store: StorageService, OSStatus: OpenSlidesStatusService, private translate: TranslateService) {
        super(store, OSStatus);
    }

    /**
     * @returns the filter definition
     */
    protected getFilterDefinitions(): OsFilter[] {
        return [
            {
                label: 'Visibility',
                property: 'type',
                options: this.createVisibilityFilterOptions()
            },
            {
                label: 'Status',
                property: 'closed',
                options: [
                    { label: this.translate.instant('Open items'), condition: false },
                    { label: this.translate.instant('Closed items'), condition: true }
                ]
            }
        ];
    }

    /**
     * @override from base filter list service
     *
     * @returns the list of ViewItems without the types
     */
    protected preFilter(viewItems: ViewItem[]): ViewItem[] {
        return viewItems.filter(item => item.type !== undefined);
    }

    /**
     * helper function to create options for visibility filters
     *
     * @returns a list of choices to filter from
     */
    private createVisibilityFilterOptions(): OsFilterOption[] {
        return ItemVisibilityChoices.map(choice => ({
            condition: choice.key as number,
            label: choice.name
        }));
    }
}
