import { inject } from "aurelia-framework";
import { WebAPI } from "web-api";
import { areEqual } from './utility';

import { ContactUpdated, ContactViewed } from './messages'
import { EventAggregator } from "aurelia-event-aggregator";

interface Contact {
    firstName: string;
    lastName: string;
    email: string
}

@inject(WebAPI, EventAggregator)
export class ContactDetail {
    routeConfig;
    contact: Contact;
    originalContact: Contact;
    constructor(private api: WebAPI, private ea: EventAggregator) { }

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
        return this.api.getContactDetails(params.id).then(contact => {
            this.contact = <Contact>contact;
            this.routeConfig.navModel.setTitle(this.contact.firstName);
            this.originalContact = JSON.parse(JSON.stringify(this.contact))
            this.ea.publish(new ContactViewed(this.contact));
        });
    }

    canDeactivate() {
        if (!areEqual(this.originalContact, this.contact)) {
            return confirm("You have unsaved changes,Ar you sure you wish to leave?");
        }
        return true;
    }

    save() {
        this.api.saveContact(this.contact).then(contact => {
            this.contact = <Contact>contact;
            this.routeConfig.navModel.setTitle(this.contact.firstName);
            this.originalContact = JSON.parse(JSON.stringify(this.contact))
            this.ea.publish(new ContactUpdated(this.contact));
        });
    }
}