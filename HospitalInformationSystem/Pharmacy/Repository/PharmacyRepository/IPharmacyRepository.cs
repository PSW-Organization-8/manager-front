﻿using PharmacyClassLib.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PharmacyClassLib.Repository
{
    public interface IPharmacyRepository
    {
        List<Pharmacy> Get();
    }
}